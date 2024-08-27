const h1 = document.getElementById('h1')

  const req = fetch(`http://localhost:8087/categoria/`).then((resp)=>{
    resp.json().then((data)=>{    

      const listarCategorias = document.getElementById('listarCategorias')
      
      data.map(({id, nombreCategoria})=>{
        const li = document.createElement('li')
        li.innerHTML = `id:${id} nombre:${nombreCategoria}`
        listarCategorias.appendChild(li)
      })
    })
  }).catch(console.warn)

