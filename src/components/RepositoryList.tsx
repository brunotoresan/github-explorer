import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    // About the second parameter of useEffect, and the arrow function:
    // []:    the arrow function will only execute once
    // [var]: the arrow function executes every time 'var' changes
    // null:  the arrow function will run after every render
    useEffect(() => {
        // The Fetch API interface allows web browser to make HTTP 
        // requests to web servers.
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                { repositories.map(repository => {
                    return <RepositoryItem 
                            key={repository.name} 
                            repository={repository} />
                }) }
            </ul>
        </section>
    );
}