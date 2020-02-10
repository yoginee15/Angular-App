import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
        if(((control.value) as String).indexOf(' ')>=0)
        return {cannotContainSpace:true}
        return null; 
    }
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
        const userNames = ['admin','user','user1','user2','user3'];
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // console.log("username",userNames)
                if(userNames.indexOf(control.value)>-1){
                    resolve({shouldBeUnique:true})
                }else{
                    resolve(null);
                }
            },2000)
        })
    }
}