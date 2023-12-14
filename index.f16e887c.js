const e="https://api.thecatapi.com/v1",r="live_P0dQ7oUYgA6D9xiTVrZ5kawCo8KiAc3cNxiSDEmamQIcEapg6ZwUPPwPra7YzvoS";async function a(){try{let a=await fetch(`${e}/breeds?api_key=${r}`);if(!a.ok)throw Error(a.status);return await a.json()}catch(e){throw Error(`Error fetching breeds: ${e.message}`)}}async function t(a){try{let t=await fetch(`${e}/images/search?api_key=${r}&breed_ids=${a}`);if(!t.ok)throw Error(t.status);return await t.json()}catch(e){throw Error(`Error fetching cat by breed: ${e.message}`)}}const s=document.querySelector("select"),c=document.querySelector(".cat-card"),i=document.querySelector(".loader");document.querySelector(".error"),s.addEventListener("change",function(e){let r=e.currentTarget.value;i.classList.remove("hidden"),t(r).then(e=>{let{url:r,breeds:a}=e[0];i.classList.add("hidden"),c.innerHTML=`<div class="catCard">
      <img src="${r}" alt="${a[0].name}" width="400" />
      <div class="descr">
        <h2 class="characteristic">${a[0].name}</h2>
        <h3>${a[0].description}</h3>
        <div class="char_box">
          <p><span class="characteristic">Origin:</span> ${a[0].origin}</p>
          <p><span class="characteristic">Life span:</span> ${a[0].life_span}</p>
          <p><span class="characteristic">Weight:</span> ${a[0].weight}</p>
          <p><span class="characteristic">Temperament:</span> ${a[0].temperament}</p>
          </div>
        </div>
    </div>`}).catch(e=>{i.classList.add("hidden"),e.classList.remove("hidden"),console.error("Error fetching cat by breed:",e)})}),a(void 0).then(e=>{let r=e.map(({name:e,id:r})=>`<option value ='${r}'>${e}</option>`);s.insertAdjacentHTML("beforeend",r)}).catch(e=>{i.classList.add("hidden"),e.classList.remove("hidden"),console.error("Error fetching breeds:",e)}),i.classList.add("hidden");
//# sourceMappingURL=index.f16e887c.js.map
