import { db, email } from "hatchable";
export const access = "public";
export const methods = ["POST"];
function clean(value, max=1500) { return String(value ?? "").trim().slice(0,max); }
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
export default async function(req,res) {
  const body=req.body||{};
  const firstName=clean(body.firstName,80),lastName=clean(body.lastName,80),emailAddress=clean(body.email,254).toLowerCase();
  const destination=clean(body.destination,80),timing=clean(body.timing,80),travelers=clean(body.travelers,40),budget=clean(body.budget,80),notes=clean(body.notes,2000);
  if(!firstName||!lastName||!validEmail(emailAddress)||!destination||body.consent!==true)return res.status(400).json({error:"Please complete the required fields and consent checkbox using a valid email address."});
  const reference="RCG-"+crypto.randomUUID().replace(/-/g,"").slice(0,10).toUpperCase();
  try { await db.query("INSERT INTO cruise_enquiries (reference,first_name,last_name,email,destination,timing,travelers,budget,notes,consent,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[reference,firstName,lastName,emailAddress,destination,timing,travelers,budget,notes,true,new Date().toISOString()]); }
  catch(err){console.error("Enquiry storage failed",err);return res.status(500).json({error:"Your enquiry could not be saved at the moment. Please try again shortly."});}
  try { const inbox=await db.query("SELECT value FROM site_settings WHERE key=$1",["enquiry_notification_email"]);const notifyTo=inbox.rows?.[0]?.value;if(notifyTo&&validEmail(notifyTo)){const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));await email.send({to:notifyTo,subject:"New cruise enquiry "+reference,html:"<h2>New cruise enquiry</h2><p><b>Reference:</b> "+esc(reference)+"</p><p><b>Name:</b> "+esc(firstName+" "+lastName)+"</p><p><b>Email:</b> "+esc(emailAddress)+"</p><p><b>Destination:</b> "+esc(destination)+"</p><p><b>Timing:</b> "+esc(timing)+"</p><p><b>Travelers:</b> "+esc(travelers)+"</p><p><b>Budget per person:</b> "+esc(budget)+"</p><p><b>Notes:</b> "+esc(notes)+"</p>"});}}catch(err){console.error("Enquiry notification failed",err);}
  return res.status(201).json({ok:true,reference});
}