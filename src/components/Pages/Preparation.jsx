import data from '../json/cars.json'
import React, { useEffect } from 'react'
import '../css/preparation.css'

const Preparation = () => {
  useEffect(() => {
    let dataTableInfo = document.querySelector('.table-group-divider')
    
    $(document).ready(function () {
      $('#tablax').DataTable({
        language: {
          processing: "Tratamiento en curso...",
          search: "Buscar&nbsp;:",
          lengthMenu: "Agrupar de _MENU_ items",
          info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
          infoEmpty: "No existen datos.",
          infoFiltered: "(filtrado de _MAX_ elementos en total)",
          infoPostFix: "",
          loadingRecords: "Cargando...",
          zeroRecords: "No se encontraron datos con tu busqueda",
          emptyTable: "No hay datos disponibles en la tabla.",
          paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Ultimo"
          },
          aria: {
            sortAscending: ": active para ordenar la columna en orden ascendente",
            sortDescending: ": active para ordenar la columna en orden descendente"
          }
        },
        scrollY: 400,
        lengthMenu: [[10, 25, -1], [10, 25, "All"]],
      });
    });

    data.forEach(element => {
      dataTableInfo.innerHTML +=
        `<div>
        <tr>
                <td>${element.ID}</td>
                <td>${element.Placa}</td>
                <td>${element.Marca}</td>
                <td>${element.Modelo}</td>
                <td>${element.Kilometraje}</td>
                <td>${element.Trasmisión}</td>
                <td>${element.Tipo}</td>
                <td>${element.Precio}</td>
                <td>${element.Proviniencia}</td>
                <td>Acciones</td>
        </tr>
    </div>`
    });

  }, [])

  return (
    <div className='table-info'>
      
      <section className='table-section-1'>
        <table id='tablax' className="table table-striped table-bordered">

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Placa</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Kilometraje</th>
              <th scope="col">Trasmisión</th>
              <th scope="col">Tipo</th>
              <th scope="col">Precio de compra</th>
              <th scope="col">Proviniencia</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              //! Aqui va los datos de table
            }
          </tbody>
        </table>
      </section>
      {
        //! AGREGAR SECCION DE BUSCAR - RESULTADOS - PAGINACION Y ACCIONES CARGAR MASIVO Y NUEVO
      }
    </div>
  )
}

export default Preparation