let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

  
  str = str.toLowerCase()
  str = str.trim()
  str = str.split(' ')
  str = str.find(element => element === 'bobi')

  if(str){
    console.log('bob exist')
  } else {
    console.log('bob is a no show')
  }






  




