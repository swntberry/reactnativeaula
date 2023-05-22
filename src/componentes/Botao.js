import React from "react";
import { Button } from "react-native/types";

export default props => {
    function executar(){
        console.warn("Esta executando!!!")
    }
    return (

        <Button
             title= "Aperte o botao"
             onPress={executar}
             />
    )
}