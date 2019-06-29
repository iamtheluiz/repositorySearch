import axios from 'axios';

class App{
    constructor(){
        this.repositories = []; // Stores all repositories data
        this.repositoryForm = document.getElementById("repositoryForm");
        this.repositoryNameInput = document.getElementById("repositoryForm");

        // Listen when the page form is submited
        this.startListeningRepositoryForm();
    }

    startListeningRepositoryForm(){
        this.repositoryForm.onsubmit = () => addRepository(this.repositoryNameInput.value);
    }

    addRepository(formData){
        axios.get('https://api.github.com/users/iamtheluiz')
            .then((response) => {
                console.log(response.data);
            })
    }
}