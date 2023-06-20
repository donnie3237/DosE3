import { execSync } from 'child_process';

export function runCommand(command) {
    try {
        execSync(`${command}`,{stdio:'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`,e)
        return false ;
    }
    return true ;
}
