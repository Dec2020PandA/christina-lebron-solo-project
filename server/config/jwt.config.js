const JSRSASign = require("jsrsasign");

const GenerateJWT = (header, claims, key) => {
  // convert everything into strings
  const sHeader = JSON.stringify(header);
  const sPayload = JSON.stringify(claims);
  // generate the JWT and return to caller
  const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
  return sJWT;
};

const DecodeJWT = sJWS => {
  const aJWT = sJWS.split(".");
  const uHeader = JSRSASign.b64utos(aJWT[0]);
  const uClaim = JSRSASign.b64utos(aJWT[1]);
  const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
  const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
  return pClaim;
}

const ValidateJWT = (header, token, key) => {
  return JSRSASign.jws.JWS.verifyJWT(token, key, header);
};

module.exports = {
  GenerateJWT,
  DecodeJWT,
  ValidateJWT
};

// generation
const claims = {
  Username: "cmlebron14@gmail.com",
  Age: 28,
  Fullname: "Christina Lebron"
}
const key = "$ChristinaIsAw3some!";
const header = {
  alg: "HS512",
  typ: "JWT"
};
const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImNtbGVicm9uMTRAZ21haWwuY29tIiwiQWdlIjoyOCwiRnVsbG5hbWUiOiJDaHJpc3RpbmEgTGVicm9uIn0.2ncqIAzOR095dvv8UNNcQHeWAVaKJu6MwnPRV1Ea4ONkRi7FUttWmK3Sh8Yxkpw_Cjm0yzw_CKoqXt4ySoOWFQ";
const algorithm = "HS512";