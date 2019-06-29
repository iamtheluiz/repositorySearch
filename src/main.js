import axios from 'axios';

class App{
    constructor(){
        this.repositories = []; // Stores all repositories data
        this.repositoryForm = document.getElementById("repositoryForm");
        this.repositoryNameInput = document.getElementById("repositoryName");

        // Listen when the page form is submited
        this.startListeningRepositoryForm();
    }

    startListeningRepositoryForm(){
        this.repositoryForm.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        // Prevents that the form redirects to another page
        event.preventDefault();

        //Get repository information
        try {
            const response = await axios.get(`https://api.github.com/repos/${this.repositoryNameInput.value}`)

            // Clear the input field
            this.repositoryNameInput.value = '';
        
            const { name, description, html_url, owner: {avatar_url} } = response.data;
        } catch (error) {
            console.warn(error);
        }
    }
}

new App();