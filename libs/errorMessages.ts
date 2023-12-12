const messageList = {
    unknown:            'Accured unknown error',
    invalidArg:         'Provide a valid %{0} for %{1}',
    noParamsToChange:   'Please provide at least one parameter to change'
};


const messageStruct = (errorText: string) => ({
    error: {
        message: errorText
    }
});
const replaceAllArgs = (str: string, index = 0, args: string[] | undefined): string | (() => string) => (
    !args || args.length === index ?
    str :
    replaceAllArgs(str.replace(`%{${index}}`, args[index]), index+1, args)
);
const getErrorMessage = (errorName: string, args?: string[]) => messageStruct(
    !Object.keys(messageList).includes(errorName) ?
    messageList.unknown : replaceAllArgs(messageList[errorName as keyof typeof messageList], 0, args) as string
);

export default getErrorMessage;