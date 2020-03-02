import React from 'react';

function Modal(props){
  
    return(
        <div className="backdrop" >
				<div className="modal" >
					{props.children}


					<button onClick={props.hide} className="closeButton" type="button">
						<svg class="styles_closeIcon__1QwbI" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path></svg>
					</button>
				</div>
			</div>
    )
}

export default Modal