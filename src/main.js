import axios from 'axios';

class App{
    constructor(){
        this.repositories = []; // Stores all repositories data
        this.repositoryForm = document.getElementById("repositoryForm");
        this.repositoryNameInput = document.getElementById("repositoryName");
        this.repositoryList = document.getElementById("repositoryList");
        this.loadingIcon = document.getElementById("loading");

        // Listen when the page form is submited
        this.startListeningRepositoryForm();
    }

    startListeningRepositoryForm(){
        this.repositoryForm.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        this.loadingIcon.style.display = 'inherit';
        // Prevents that the form redirects to another page
        event.preventDefault();

        //Get repository information
        try {
            const response = await axios.get(`https://api.github.com/repos/${this.repositoryNameInput.value}`)

            this.loadingIcon.style.display = 'none';

            // Clear the input field
            this.repositoryNameInput.value = '';
        
            const { name, description, html_url, owner: {avatar_url} } = response.data;
            
            // Build a repository object
            const repository = {
                name,
                description,
                link: html_url,
                avatar_url
            };
            // Store the new repository
            this.repositories.push(repository);

            this.renderInfo(repository);
        } catch (error) {
            console.warn(error);
        }
    }

    renderInfo({name, description, link, avatar_url}){
        const div = `<li tabindex="none">
            <img src="${avatar_url}" alt="User Image">
            <div id="repoInfo">
                <h2>${name}</h2>
                <p>${description}</p>
                <a href="${link}">Access Now!</a>
            </div>
        </li>`;

        this.repositoryList.innerHTML += div;
    }
}

new App();