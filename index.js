const core = require('@actions/core');
try {
    const name = core.getInput('NAME');
    const age = core.getInput('AGE');
    const lastname = core.getInput('APELLIDO');
    console.log(`Hello ${name}!`);
    console.log(`You are ${age} years old.`);
    console.log(`Your last name is ${lastname}.`);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}