import { describe, it, expect, vi } from 'vitest';
import runCLI from '../src/index.ts';
import * as commands from '../src/runCommand.ts';
import * as prompts from '@clack/prompts';
import * as port from '../src/port';
import { packageModule } from '../src/config';

describe("CLI tool", () => {
it("should run update command", async () => {
    const spy = vi.spyOn(commands, 'runCommand').mockResolvedValue(true);
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    await runCLI(["update"]);
    expect(spy).toHaveBeenCalledWith("npm install -g dose3@latest");
});

  it("should show version", async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    await runCLI(["-v"]);
    expect(log).toHaveBeenCalledWith(packageModule.version);
  });

  it("should call scan", async () => {
    const spy = vi.spyOn(port, 'scan').mockImplementation(() => {});
    await runCLI(["scan"]);
    expect(spy).toHaveBeenCalled();
  });

  it("should call kill with correct port", async () => {
    const spy = vi.spyOn(port, 'kill').mockImplementation(() => {});
    await runCLI(["kill", "3000"]);
    expect(spy).toHaveBeenCalledWith("3000");
  });

  it("should run install with user input", async () => {
    vi.spyOn(prompts, 'group').mockResolvedValue({
      name: "my-app",
      framework: "bun",
    });
    const spy = vi.fn();
    vi.mock('./install.ts', () => ({ default: spy }));

    await runCLI([]);
    expect(spy).toHaveBeenCalledWith("bun", "my-app");
  });
});
