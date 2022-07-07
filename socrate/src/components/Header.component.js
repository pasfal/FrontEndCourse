
export default function Header(props) {

  console.log(props.elencoLink)
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a className='d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none' href='www.google.com'>
            {props.testoLogo}
          </a>
          <div className="d-flex flex-wrap align-items-center mt-0 justify-content-end">
            {props.elencoLink.map(
              (el) => <a href={`${el.urlLink}`} className='nav-link px-2 link-secondary'>{el.nomeLink}</a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}