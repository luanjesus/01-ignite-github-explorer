interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li className="border-list-bottom">
            <a href={props.repository.html_url}>
                <strong>{props.repository.name}</strong>
            </a>
            <p>{props.repository.description}</p>
        </li>
    );
}