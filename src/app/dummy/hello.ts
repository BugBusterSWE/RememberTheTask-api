/**
 * A simple hello worl class
 */
export default class HelloWorld {
    
    sayHello ( to : string ) : string {
        
        if (to == ""){
            
            return undefined;
        }
        
        return "Hello " + to;
    }
}