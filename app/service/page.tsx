import ServicePage from "../components/servicepage";


export default function ServicePageComponent() {
  return (
    <div className="relative w-full">
  <div 
    className="relative w-full h-fit bg-cover bg-center"
    style={{ backgroundImage: 'url("/images/Group.svg")' }}
  >
    <ServicePage />
  </div>
</div>
  );
}