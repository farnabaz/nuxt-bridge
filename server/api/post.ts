export default function (req) {
  console.log("unenv direct call body is", req.body);
  
  return req.body || { nobody: 1}
}