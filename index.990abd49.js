!function(){let e="https://api.thecatapi.com/v1",t="live_P0dQ7oUYgA6D9xiTVrZ5kawCo8KiAc3cNxiSDEmamQIcEapg6ZwUPPwPra7YzvoS";async function r(){try{let r=await fetch(`${e}/breeds?api_key=${t}`);if(!r.ok)throw Error(r.status);return await r.json()}catch(e){throw Error(`Error fetching breeds: ${e.message}`)}}async function a(r){try{let a=await fetch(`${e}/images/search?api_key=${t}&breed_ids=${r}`);if(!a.ok)throw Error(a.status);return await a.json()}catch(e){throw Error(`Error fetching cat by breed: ${e.message}`)}}let c=document.querySelector("select"),n=document.querySelector(".cat-card");function o(){console.log("Error fetching breeds")}c.addEventListener("change",function(e){a(e.currentTarget.value).then(e=>{let{url:t,breeds:r}=e[0];n.innerHTML=`<div class="catCard">
      <img src="${t}" alt="${r[0].name}" width="400" />
      <div class="descr">
        <h2>${r[0].name}</h2>
        <p>${r[0].description}</p>
        <p><strong>Temperament:</strong> ${r[0].temperament}</p>
      </div>
    </div>`}).catch(o)}),r(void 0).then(e=>{let t=e.map(({name:e,id:t})=>`<option value ='${t}'>${e}</option>`);c.insertAdjacentHTML("beforeend",t)}).catch(o)}();
//# sourceMappingURL=index.990abd49.js.map
