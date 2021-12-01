const Usados = () => {
    return (
        <main>
            <h3>Pagina de usados</h3>
        </main>
    );
}

export default Usados;


// import React, { Component } from 'react';

// import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

// class ContactForm extends Component {

//   submitForm (e) {
//     const url = 'http://localhost:3000/vendedores';

//     e.preventDefault()
//     alert("Correcto");
//     setTimeout(() => {
//       this.props.history.push('/'); // <--- The page you want to redirect your user to.
//     }, 1000);
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitForm.bind(this)}>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(ContactForm);