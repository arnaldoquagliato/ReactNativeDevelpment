import axios from 'axios'

const api = axios.create({
   baseURL: 'http://homologacao.quantaconsultoria.com:8080/bentham-obras',
   headers:{
     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXNzb2FfZmlzaWNhX2lkIjoxOCwidXNlcl9uYW1lIjoicm9vdCIsInNjb3BlIjpbIm1vYmlsZSJdLCJleHAiOjE2MTQ2OTgxMDEsImF1dGhvcml0aWVzIjpbIlJPTEVfUEVTU09BX0ZJU0lDQV9DUlVESSIsIlJPTEVfUFJPR1JBTUFfQ1JVREkiLCJST0xFX05PVElGSUNBQ0FPX0NSVURJIiwiUk9MRV9QUk9GSVNTQU9fQ1JVREkiLCJST0xFX0RJQVJJT19ERV9PQlJBX0NSVURJIiwiUk9MRV9NQU9fREVfT0JSQV9DUlVESSIsIlJPTEVfTElDRU5DQV9BTUJJRU5UQUxfQ1JVREkiLCJST0xFX1RJUE9fREVfRVFVSVBBTUVOVE9fQ1JVREkiLCJST0xFX1BFUkZJTF9DUlVESSIsIlJPTEVfREFTSEJPQVJEX0NSVURJIiwiUk9MRV9NQVJDQV9ERV9FUVVJUEFNRU5UT19DUlVESSIsIlJPTEVfQ09OVFJBVE9fQ1JVREkiLCJST0xFX1VTVUFSSU9fQ1JVREkiLCJST0xFX0NPTlNPUkNJT19DUlVESSIsIlJPTEVfTUFQQV9DUlVESSIsIlJPTEVfRVFVSVBBTUVOVE9fQ1JVREkiLCJST0xFX1BFU1NPQV9KVVJJRElDQV9DUlVESSIsIlJPTEVfV0JTX0NSVURJIiwiUk9MRV9USVBPX01BVEVSSUFMX0NSVURJIiwiUk9MRV9USVBPX09CUkFfQ1JVREkiLCJST0xFX0dSVVBPX0RFX0VRVUlQQU1FTlRPX0NSVURJIiwiUk9MRV9BUkVBU19ERV9NQU9fREVfT0JSQV9DUlVESSIsIlJPTEVfSkFaSURBX0NSVURJIiwiUk9MRV9ET0NVTUVOVE9fRk9UT0dSQUZJQ09fQ1JVREkiLCJST0xFX1VOSURBREVfREVfTUVESURBX0NSVURJIl0sImp0aSI6IjA3NGFlNDVhLWE0ZTItNDExOS1hNzQ4LWUxN2Y1OWI0NmZjYSIsImNsaWVudF9pZCI6ImJlbnRoYW1fbW9iaWxlIiwicGVyZmlsIjoiUm9vdCJ9.jyTln2lVL0PUTFvSnkKu8dSg-_mKh0ORdwe5GEAfLwY'
   }
 });

export default api;