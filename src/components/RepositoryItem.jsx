export function RepositoryItem(props){
  return(
  <li>
    <strong>{props.repository?.name ?? 'undefined'}</strong>
    <p>{props.repository?.description ?? 'Não existe descrição'}</p>
    <a href={props.repository?.html_url}>
      Link do Git
    </a>

  </li>
  );
}