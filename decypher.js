let cryptedMsg = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
cryptedMsg = cryptedMsg.split(" ").join('')

let shift = 0


for (let i = 0 ; i < 26; i++){
   shift += 1
   console.log(shift)
 


    for ( let j = 0; j < cryptedMsg.length; j++){
        letterCode = cryptedMsg.charCodeAt(j)
      
    //console.log(letterCode)
    let decryptedLetter = letterCode + shift
    
    if (decryptedLetter < 65) {
      decryptedLetter = decryptedLetter + 26
    } else if (decryptedLetter > 90){
      decryptedLetter = decryptedLetter - 26
    }

    let newLetter = String.fromCharCode(decryptedLetter)

   
   console.log(newLetter)
    
   } 
   
} 

