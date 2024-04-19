import { runCommand } from "../load/process/runCommand";
import {expect , test} from 'vitest'

function sum(num1 , num2){
     const result = num1 + num2
     return result
}
test('should not run WTF command', () => {
    expect(runCommand('cekodjgobivfdb')).toBe(false)
    expect(runCommand('ls')).toBe(true)
})