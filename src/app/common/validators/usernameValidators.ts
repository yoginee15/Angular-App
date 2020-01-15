import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
        if(((control.value) as String).indexOf(' ')>=0)
        return {cannotContainSpace:true}
        return null; 
    }
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if((control.value as String).toLowerCase() === "admin"){
                    resolve({shouldBeUnique:true})
                }else{
                    resolve(null);
                }
            },2000)
        })
    }
}