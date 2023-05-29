// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import aes from 'js-crypto-aes';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CryptoService {

//   constructor() { }

//   private IV_LENGTH_BYTE = 12;
//   private TAG_LENGTH_BYTE = 16;
//   private KEY = environment.cryptoKey;
//   private ALGORITHM = 'AES-GCM';

//   encrypt(text: string): Observable<string> {
//     return new Observable((observer) => {
//       try {
//         const msg = new TextEncoder().encode(text); // arbitrary length of message in Uint8Array
//         const key = new TextEncoder().encode(this.KEY);
//         const iv = new Uint8Array(12); // 12 bytes IV in Uint8Array for AES-GCM mode
//         window.crypto.getRandomValues(iv);
//         // let encrypted = await window.jscaes.encrypt(msg, key, { name: 'AES-GCM', iv, tagLength: 16 });
//         aes.encrypt(msg, key, { name: 'AES-GCM', iv, tagLength: 16 }).then((encrypted) => {
//           // now you get an Uint8Array of encrypted message
//           let cypher = new Uint8Array([...iv, ...encrypted]);
//           observer.next(this.u8ToBase64(cypher));
//           observer.complete();
//         });
//       } catch (ex: any) {
//         observer.error(ex.message);
//         observer.complete();
//       }
//     });

//   }

//   u8ToBase64(u8: Uint8Array) {
//     return btoa(String.fromCharCode.apply(null, u8 as any));
//   }

//   base64ToU8(str: string) {
//     return atob(str).split('').map(function (c) { return c.charCodeAt(0); });
//   }

// }
