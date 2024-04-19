import { runCommand } from "../load/process/runCommand";
import {expect , test , vi} from 'vitest'

test('should not run WTF command', () => {
    expect(runCommand('cekodjgobivfdb')).toBe(false)
})