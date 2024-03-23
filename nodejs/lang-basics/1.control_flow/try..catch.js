// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

// https://stackoverflow.com/questions/1433558/handling-specific-errors-in-javascript-think-exceptions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types


try {
    console.log('kuku')
    throw new Error('kuku')
} catch (e) {
    console.error(e.name); // 'Error'
    console.error(e.message); // 'The message', or a JavaScript error message
    console.error(e)
} finally {
    console.log('bye')
}
