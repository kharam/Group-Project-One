
        function MakeElement(elementtype,classes,type,id,text,value1,value2){
                var rend = elementtype
                if(text !== null){
                rend.text(text);
                }
                if(classes !== null){
                rend.addClass(classes);
                }
                if(id !== null){
                rend.attr("id", "BER"+type+id)
                }
                if(value1 !== null){
                rend.attr("value1", value1)
                }
                if(value2 !== null){
                        rend.attr("value2", value2)
                }
            return rend
        }

        function ReRenderArea(rerendertarget,renderarray){

                var renddiv = renderarray[0]

                rerendertarget.append(renddiv);

                for(var i = 0; i < renderarray.length; i++) {
                        console.log(renderarray[i])
                renddiv.append(renderarray[i]);
                }

                rerendertarget.append(renddiv);
        }





        function RenderDropdown(CityStorage,target){


                












        }