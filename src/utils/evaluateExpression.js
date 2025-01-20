function evaluateExpression(expression) {
  try {
    const modifiedExpression = expression.replace(/\^/g, "**");
    if (!/^[0-9+\-*/.^\s()]+$/.test(modifiedExpression)) {
      throw new Error("Invalid Expression");
    }
    const result = new Function(`return ${modifiedExpression}`)();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default evaluateExpression;
