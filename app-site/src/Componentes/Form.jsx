
function Formulario ()

{
  return (
  
  <fieldset className="campo">
<form>
  <div>
  <label htmlFor="name"><strong>Nome</strong></label><br/>
  <input type="text" name="name" className="from-control"/>

  </div><br/>

  <div>
  <label htmlFor="email"><strong>E-mail</strong></label><br/>
  <input type="email" name="email" className="from-control"/>

  </div><br/>

  <div>
  <textarea cols={21} rows={6}></textarea>
  </div><br/>
  <button className="btn " >Enviar</button>

</form>
</fieldset>


  )
 
}

export default Formulario;