<link href="calendario/calendar-blue.css" rel="stylesheet" type="text/css">
<script type="text/JavaScript" language="javascript" src="calendario/calendar.js"></script>
<script type="text/JavaScript" language="javascript" src="calendario/lang/calendar-sp.js"></script>
<script type="text/JavaScript" language="javascript" src="calendario/calendar-setup.js"></script>

<tr>
    <td>fecha </td>
    <td width="238"><input name="fecha" type="text" class="cajaPequena" id="fecha" size="10" maxlength="10" value="<?php /*echo date('d/m/Y');*/ if (isset($registro)){ echo $registro['fecha'];} else {if(isset($registro)=="") echo date('d/m/Y');} ?>" onKeyUp="return tabular(event,this)"/>
      <img src="img/Calendardos.png" name="Image1" id="Image1" width="16" height="16" onmouseove="this.style.cursor='pointer'" />
      <script type="text/javascript">
					Calendar.setup(
					  {
					inputField : "fecha",
					ifFormat   : "%d/%m/%Y",
					button     : "Image1"
					  }
					);
		</script></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>