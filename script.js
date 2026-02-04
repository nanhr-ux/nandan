function login(){
    const u=document.getElementById('username').value;
    const p=document.getElementById('password').value;

    if(u==='xyz' && p==='1234'){
      document.getElementById('loginBox').style.display='none';
      document.getElementById('dashboard').style.display='block';
    } else {
      document.getElementById('error').style.display='block';
    }
  }

  function showDetails(n,f,c,a,m){
    pName.innerText=n;
    pFather.innerText=f;
    pContact.innerText=c;

    pMarks.innerText=m;
    popup.style.display='flex';
  }
  function logout(){
document.getElementById('dashboard').style.display='none';
document.getElementById('loginBox').style.display='block';
document.getElementById('username').value='';
document.getElementById('password').value='';
document.getElementById('error').style.display='none';
}

  function closePopup(){popup.style.display='none'}