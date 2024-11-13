import '../contacts/contacts.scss'

const Map = () => {
   return(
      <iframe
            className="address-list__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.4449123211731!2d33.412942698449456!3d49.06902441962153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d75326b31c653d%3A0xb0bf30888fdc31a!2z0YPQuy4g0JzQsNC50L7RgNCwINCR0L7RgNC40YnQsNC60LAsIDEyLCDQmtGA0LXQvNC10L3Rh9GD0LMsINCf0L7Qu9GC0LDQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzOTYwMA!5e0!3m2!1sru!2sua!4v1697393460645!5m2!1sru!2sua"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map Location"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
   );
}

export default Map;