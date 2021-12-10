const Repo: React.FC<{ size: number, name: string, url: string, description: string, language: string, fork_count: number, watchers_count: number }> = ({ name, url, description, language, fork_count, watchers_count, size }) => {

	return (
		<a href={url} target="_blank" rel="noreferrer noopener" className="repos">
			<div className="repo__top">
				<div className="repo__name">
					<svg aria-hidden="true" height="16" role="img" viewBox="0 0 12 16" width="12" ><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
					<h3>{name}</h3>
				</div>
				<p>{description}</p>
			</div>
			<div className="repo__stats">
				<div className="repo__stats--left">
					<span>
						<div className="language" ></div>
						{language}
					</span>
					&nbsp;
					&nbsp;
					&nbsp;
					<span>
						<svg aria-hidden="true" height="16" role="img" viewBox="0 0 14 16" width="14" ><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
						&nbsp;
						{fork_count.toLocaleString()}
					</span>
					&nbsp;
					<span>
						<svg aria-hidden="true" height="16" role="img" viewBox="0 0 10 16" width="10" ><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
						&nbsp;
						{watchers_count.toLocaleString()}
					</span>
				</div>
				<div className="repo__stats--right">
					<span>{size.toLocaleString()} KB</span>
				</div>
			</div >
		</a >
	)
}
export default Repo