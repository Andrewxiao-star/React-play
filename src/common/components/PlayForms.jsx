import {Chip, Autocomplete, TextField, InputLabel , MenuItem , FormControl , Select} from '@mui/material';
import { useEffect, useState } from 'react';


const PlayForm = ({fields, data, onChange}) => {

  const [formData, setFormData] = useState({})
  useEffect(() => {
    setFormData({...data})
  }, [data])

  const onDataChanged = (key, value) => {
    formData[key] = value;
    setFormData({...formData})
    if(onChange) {
      onChange(key, value)
    }
  }

   const renderField = field => {
    switch(field.type){
      case 'input': return <TextField id={field.id} 
                                      label={field.plaeholder}
                                      value={formData[field.datafields]} 
                                      size="small"
                                      className='w-full'
                                      {...field}

                                      onChange={(e) => {
                                        onDataChanged(field.datafield, e.target.value)}
                                      }/>
        case 'select': return <FormControl fullWidth>
                                <Select
                                  id={field.id} 
                                  size="small"
                                  label={field.plaeholder}
                                                              value={formData[field.datafields]} 
                                  onChange={(e) => {
                                    onDataChanged(field.datafield, e.target.value)}
                                  }
                                >
                                  {
                                    (field.options || []).map(o => {
                                      return <MenuItem value={o.value}>{o.name}</MenuItem>
                                    })
                                  }
                                </Select>
                              </FormControl>
      case 'fileupload': return <span><input
      accept="image/*"
      className={classes.input}
      style={{ display: 'none' }}
      id="raised-button-file"
      multiple
      type="file"
    />
    <label htmlFor="raised-button-file">
      <Button variant="raised" component="span" className={classes.button}>
        Upload
      </Button>
    </label> 
    </span>
    }
    
  }
 
  const renderForm = () => {
    return <>
        <FormControl className='w-full'>
    {fields.map(field => {
      return(
        <div className='flex p-2'>
          <div className='flex-1'>
            {field.display}{field.required ? "*":""}
          </div>
          <div className='flex-1'>
        {renderField(field)}
        </div>
        </div>
        
      )
    })}
   
        </FormControl> </>
  }
  return (
    <>
      {renderForm()}
    </>
  );
};

export default PlayForm;
