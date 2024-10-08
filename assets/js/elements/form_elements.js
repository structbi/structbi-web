class FormElements
{
    constructor(element_type, data)
    {
        this.element_type = element_type;
        this.data = data;
    }
    Get_()
    {
        let return_element;
        switch(this.element_type)
        {
            case "text":
            {
                return_element = this.Text_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.maxlength, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "long-text":
            {
                return_element = this.LongText_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.maxlength, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "int-number":
            {
                return_element = this.IntNumber_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.maxlength, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "decimal-number":
            {
                return_element = this.DecimalNumber_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.maxlength, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "date":
            {
                return_element = this.Date_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "time":
            {
                return_element = this.Time_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "file":
            {
                return_element = this.File_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "image":
            {
                return_element = this.Image_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
            case "selection":
            {
                return_element = this.Selection_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.required, "")
                );
                break;
            }
            default:
            {
                return_element = this.Text_
                (
                    wtools.IFUndefined(this.data.identifier, "")
                    ,wtools.IFUndefined(this.data.maxlength, "")
                    ,wtools.IFUndefined(this.data.required, "")
                    ,wtools.IFUndefined(this.data.value, "")
                );
                break;
            }
        }

        return return_element;
    }
    Text_(identifier, maxlength, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="text" name="${identifier}" maxlength="${maxlength}" required="${required}" value="${value}"/>
            </td>
        `;
    }
    LongText_(identifier, maxlength, required, value)
    {
        return `
            <td scope="row">
                <textarea class="form-control" name="${identifier}" maxlength="${maxlength}" required="${required}">
                    ${value}
                </textarea>
            </td>
        `;
    }
    IntNumber_(identifier, maxlength, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="number" name="${identifier}" maxlength="${maxlength}" required="${required}" value="${value}"/>
            </td>
        `;
    }
    DecimalNumber_(identifier, maxlength, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="number" name="${identifier}" maxlength="${maxlength}" required="${required}" value="${value}"/>
            </td>
        `;
    }
    Date_(identifier, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="date" name="${identifier}" required="${required}" value="${value}"/>
            </td>
        `;
    }
    Time_(identifier, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="time" name="${identifier}" required="${required}" value="${value}"/>
            </td>
        `;
    }
    File_(identifier, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="file" name="${identifier}" required="${required}"/>
            </td>
        `;
    }
    Image_(identifier, required, value)
    {
        return `
            <td scope="row">
                <input class="form-control" type="file" name="${identifier}" required="${required}"/>
            </td>
        `;
    }
    Selection_(identifier, required)
    {
        return `
            <td scope="row">
                <select class="form-select" name="${identifier}" required="${required}">
                    <option value="">-- Ninguno --</option>
                </select>
            </td>
        `;
    }
}