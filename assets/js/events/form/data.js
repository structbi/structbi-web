$(function()
{

    // Read
    const data_read = () =>
    {
        // Wait animation
        let wait = new wtools.ElementState('#component_data_read .notifications', false, 'block', new wtools.WaitAnimation().for_block);

        // Get Form identifier
        const url_params = new URLSearchParams(window.location.search);
        const form_identifier = url_params.get('identifier');

        if(form_identifier == undefined)
            return;

        // Request
        new wtools.Request(server_config.current.api + `/forms/data/read?identifier=${form_identifier}`).Exec_((response_data) =>
        {
            // Clean
            wait.Off_();
            $('#component_data_read .notifications').html('');
            $('#component_data_read table thead tr').html('');
            $('#component_data_read table tbody').html('');

            // Permissions error
            if(response_data.status == 401)
            {
                new wtools.Notification('WARNING', 0, '#component_data_read .notifications').Show_('No tiene permisos para acceder a este recurso.');
                return;
            }

            // Notification Error
            if(response_data.status != 200)
            {
                new wtools.Notification('WARNING', 0, '#component_data_read .notifications').Show_('No se pudo acceder a la data de este formulario.');
                return;
            }

            // Handle no results or zero results
            if(response_data.body.data == undefined || response_data.body.data.length < 1)
            {
                new wtools.Notification('SUCCESS', 0, '#component_data_read .notifications').Show_('Sin resultados.');
                return;
            }

            // Results elements creator (Rows)
            new wtools.UIElementsCreator('#component_data_read table tbody', response_data.body.data).Build_((row) =>
            {
                let elements = [];
                for(let column of response_data.body.columns)
                {
                    elements.push(`<td scope="row">${row[column]}</td>`);
                }

                return new wtools.UIElementsPackage('<tr></tr>', elements).Pack_();
            });

            // Results elements creator (Columns)
            let keys = response_data.body.columns_meta.data;
            new wtools.UIElementsCreator('#component_data_read table thead tr', keys).Build_((row) =>
            {
                let form_element_object = new FormElements(wtools.IFUndefined(row.column_type, "text"), row);
                let form_icon = form_element_object.GetIcon_();

                return [`<th scope="col">${form_icon}${row.name}</th>`];
            });
            
        });
    };
    data_read();
    $('#component_data_read .update').click(() => data_read());
    
    // Read Form Columns to Add new record
    $(document).on("click", '#component_data_read .add', (e) =>
    {
        try
        {
            e.preventDefault();

            // Wait animation
            let wait = new wtools.ElementState('#wait_animation_page', true, 'block', new wtools.WaitAnimation().for_page);

            // Get Form identifier
            const url_params = new URLSearchParams(window.location.search);
            const form_identifier = url_params.get('identifier');

            if(form_identifier == undefined)
                return;

            // Setup form to modify
            $('#component_data_add table tbody').html('');
            
            // Read form to modify
            new wtools.Request(server_config.current.api + `/forms/data/columns/read?identifier=${form_identifier}`).Exec_((response_data) =>
            {
                // Permissions error
                if(response_data.status == 401)
                {
                    new wtools.Notification('WARNING').Show_('No tiene permisos para acceder a este recurso.');
                    return;
                }

                // Notification Error
                if(response_data.status != 200)
                {
                    new wtools.Notification('WARNING').Show_('No se pudo acceder a la data de este formulario.');
                    return;
                }

                // Handle no results or zero results
                if(response_data.body.data == undefined || response_data.body.data.length < 1)
                {
                    new wtools.Notification('SUCCESS').Show_('Sin resultados.');
                    return;
                }
                
                // Results elements creator
                new wtools.UIElementsCreator('#component_data_add table tbody', response_data.body.data).Build_((row) =>
                {
                    let form_element_object = new FormElements(wtools.IFUndefined(row.column_type, "text"), row);
                    let form_element = form_element_object.Get_();
                    let form_icon = form_element_object.GetIcon_();

                    if(form_element == undefined)
                    {
                        new wtools.Notification('ERROR').Show_('Error al crear un elemento de formulario.');
                        return;
                    }

                    let elements = [
                        `<th scope="row">${form_icon}${row.name}</th>`
                        ,form_element
                    ];

                    return new wtools.UIElementsPackage('<tr></tr>', elements).Pack_();
                });

                wait.Off_();
                $('#component_data_add').modal('show');
            });

        }
        catch(error)
        {
            new wtools.Notification('ERROR').Show_(`Ocurri&oacute; un error: ${error}.`);
            return;
        }
    });
    
});