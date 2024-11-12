import './container.scss'

const Container = ({children, containerClazz}) => {
   let allClazz = 'container';
   if(containerClazz) { 
      allClazz += ` ${containerClazz}`;
   }
   return (
      <div className={allClazz}>
         {children}
      </div>
   );
}

export default Container;