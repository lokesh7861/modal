import React,{useRef,useEffect} from 'react';
import styled from 'styled-components'

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    background-color: rgba(0,0,0,0.3);
    padding: 3.125rem;
    z-index: 50;
`

const Dialog = styled.div`
  background-color:white;
  border-radius: 5px;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.2rem;
  position: relative;
`



function Modal(props) {
	const node=useRef()
	useEffect(()=>{
      if(props.isShowing){
		  handleOpen()
		}
		return()=>{
			document.removeEventListener('click',handleOutsideClick,false);
		}
	},[])


	 function handleOpen(){
		document.body.classList.add('overflow-hidden');
		document.addEventListener('click',handleOutsideClick,false);
	}

	function handleOutsideClick(e){
		if(node.current.contains(e.target)){
			return ;
		}
		props.hide()
	}
	return (
		<Backdrop >
			<Dialog ref={node}>
				{props.children}


				<button onClick={props.hide} className="closeButton" type="button">
					<svg className="styles_closeIcon__1QwbI" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path></svg>
				</button>
			</Dialog>
		</Backdrop>
	)
}

export default Modal