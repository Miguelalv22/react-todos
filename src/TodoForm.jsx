import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Create from '@mui/icons-material/Create'
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <List sx={{ m: 3, display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo"
                                edge="end"
                                type="submit"
                            >
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>
        </List>
    )
}