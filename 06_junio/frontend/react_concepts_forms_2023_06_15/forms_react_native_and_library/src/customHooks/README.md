## Un hook es una función que puede manejar contenido de react.

### HOOKS DE REACT: 
    - useState -> manejar un estado -> con los cambios de estado forzamos la re-render de un componente
    - useMemo -> memoizar cierta funcionalidad -> para computaciones de alto coste como ordenaciones (se parece a un useEffect en la sintaxis y el funcionamiento aunque tienen diferente significado);
    - useRef -> guardar una referencia de un elemento del html como si fuese dom pero sin usar el dom
    - useCallback -> muy parecido al useMemo pero más dedicado a funciones
    - useEffect -> realizar un contenido secundario como una petición -> únicamente cuando su array de dependencias se lo indique
    - useReducer -> manejar varios estados al mismo tiempo con menor sintaxis
    - useContext -> me va a servir para proveer a x elementos o componentes de una información


### CUSTOM HOOKS:
    - No es más que una función normal y corriente pero que puede utilizar "cosas" de React, puedes tener una función que cambie un estado de valor.
    - A los custom hooks se les suele llamar con la palabra use delante del nombre que le quieras dar, por ejemplo, quiero hacer un custom hook para manejar mi formulario: useFormulario
    - LO MEJOR DE LOS CUSTOM HOOKS ES LA REUTILIZACIÓN