// Container for all environments
var environments = {};

// Production environment
environments.beta = {
    'port' : 2222,
    'envName' : 'beta'
};

// Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.beta;

// Export the module
module.exports = environmentToExport;