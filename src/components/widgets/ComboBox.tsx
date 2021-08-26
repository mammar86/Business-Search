import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = []

export function ComboBox() {
    return (
      <Autocomplete
        id="options"
        className="m-3"
        options={['a7a', 'a8a']}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Business Type" />}
      />
    );
  }

