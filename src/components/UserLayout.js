import Header from './Header';
import NavSidebar from './NavSidebar';

export default function UserLayout(props) {
  const removeLayer = () => {
    document.getElementById("root").classList.remove("toggled-custom-class")
}

    return (
      <>
          <Header />
          <NavSidebar />
          {props.children}
          <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
      </>
    )

}

