function f(n){
  let cs = n.childNodes;
  for(let i = 0; i < cs.length; i++){
    let c = cs[i];
    if(c.nodeType == Node.TEXT_NODE){
      c.textContent = c.textContent.replace(/MIKUEC/g, "NIKUEC").replace(/mikuec/g, "nikuec").replace(/みくえっく/g, "にくえっく").replace(/ライブ/g, "焼き肉");
    }
    else{
      f(c);
    }
  }
}

f(document.body);