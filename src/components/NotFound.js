const NotFound = ({onNotFound}) => {
	return (
			<div>
				<h1 style={{color: "white", textAlign: "center"}}>No results : (</h1>
				<input type="button" defaultValue={'Вернуться на главную страницу'} onClick={() => onNotFound()}/>
			</div>
	)
}

export default NotFound