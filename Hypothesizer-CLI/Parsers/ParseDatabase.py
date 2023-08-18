import json
import sys

# Open Hypotheses DB
file = open("hypotheses.json")
# Load JSON object as a dict
data = json.load(file)


# ================================================================================
# ============================= EVIDENCE PARSING =================================
# ================================================================================

# insertEvidence:
# input: JSON evidence object in input.txt
# output: None (inserts evidence object into DB)
def insertEvidence():
    evidence = data["evidence"]["API_calls"]
    try:
        with open('input.txt', 'r') as file:
            newEvidence = json.load(file)
    except json.decoder.JSONDecodeError as e:
        print("Error parsing in evidence from input.txt, plkease make sure your evidence is formatted as a JSON object.")
        return
    evidence.append(newEvidence)
    data["evidence"]["API_calls"] = evidence
    data_string = json.dumps(data, indent = 4)
    with open('hypotheses.json', 'w') as file:
        file.write(data_string)


# rawEvidence:
# Input: None
# Output: All evidence objects in raw JSON from the DB
def rawEvidence():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "API_calls":
            print("API Calls:")
            print(evidence[key])
        if key == "DOM_events":
            print("DOM Events:")
            print(evidence[key])
        if key == "Network_events":
            print("Network Events:")
            print(evidence[key])


# rawAPIEvidence:
# Input: None
# Output: All API evidence objects in raw JSON from the DB
def rawAPIEvidence():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "API_calls":
            print("API Calls:")
            print(evidence[key])


# rawDOMEvidence:
# Input: None
# Output: All DOM evidence objects in raw JSON from the DB
def rawDOMEvidence():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "DOM_events":
            print("DOM Events:")
            print(evidence[key])


# rawNetworkEvidence:
# Input: None
# Output: All Network evidence objects in raw JSON from the DB
def rawNetworkEvidence():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "Network_events":
            print("Network Events:")
            print(evidence[key])


# allEvidence:
# Input: None
# Output: Prints all evidence objects in the DB.
def allEvidence():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "API_calls":
            apiCalls = evidence[key]
            apiCallCount = 1
            print("\n%s:" % key)
            for i in range(0, len(apiCalls)):
                apiCallKeys = apiCalls[i].keys()
                print("\tAPI Call %d." % apiCallCount)
                for apiCallKey in apiCallKeys:
                    if apiCallKey == "patterns":
                        print("\t\tpatterns:")
                        for j in range(0, len(apiCalls[i][apiCallKey])):
                            print("\t\t\t%s" % apiCalls[i][apiCallKey][j])
                        continue
                    print("\t\t%s: %s" % (apiCallKey, apiCalls[i][apiCallKey]))
                apiCallCount = apiCallCount + 1
        if key == "DOM_events":
            domEvents = evidence[key]
            domEventCount = 1
            print("\n%s:" % key)
            for i in range(0, len(domEvents)):
                domEventKeys = domEvents[i].keys()
                print("\tDOM Event %d." % domEventCount)
                for domEventKey in domEventKeys:
                    if domEventKey == "objectShape":
                        print("\t\tobjectShape:")
                        objKeys = domEvents[i][domEventKey].keys()
                        for objKey in objKeys:
                            print(
                                "\t\t\t%s: %s"
                                % (objKey, domEvents[i][domEventKey][objKey])
                            )
                        continue
                    print("\t\t%s: %s" % (domEventKey, domEvents[i][domEventKey]))
                domEventCount = domEventCount + 1
        if key == "Network_events":
            networkEvents = evidence[key]
            networkEventCount = 1
            print("\n%s:" % key)
            for i in range(0, len(networkEvents)):
                networkEventKeys = networkEvents[i].keys()
                print("\tNetwork Event %d." % networkEventCount)
                for networkEventKey in networkEventKeys:
                    if networkEventKey == "objectShape":
                        print("\t\tobjectShape:")
                        objKeys = networkEvents[i][networkEventKey].keys()
                        for objKey in objKeys:
                            print(
                                "\t\t\t%s: %s"
                                % (objKey, networkEvents[i][networkEventKey][objKey])
                            )
                        continue
                    print(
                        "\t\t%s: %s"
                        % (networkEventKey, networkEvents[i][networkEventKey])
                    )
                networkEventCount = networkEventCount + 1


# apiCalls:
# Input: None
# Output: Prints all API Call evidence objects in the DB.
def apiCalls():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "API_calls":
            apiCalls = evidence[key]
            apiCallCount = 1
            print("\n%s:" % key)
            for i in range(0, len(apiCalls)):
                apiCallKeys = apiCalls[i].keys()
                print("\tAPI Call %d." % apiCallCount)
                for apiCallKey in apiCallKeys:
                    if apiCallKey == "patterns":
                        print("\t\tpatterns:")
                        for j in range(0, len(apiCalls[i][apiCallKey])):
                            print("\t\t\t%s" % apiCalls[i][apiCallKey][j])
                        continue
                    print("\t\t%s: %s" % (apiCallKey, apiCalls[i][apiCallKey]))
                apiCallCount = apiCallCount + 1


# domEvents:
# Input: None
# Output: Prints all DOM Event evidence objects in the DB.
def domEvents():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "DOM_events":
            domEvents = evidence[key]
            domEventCount = 1
            print("\n%s:" % key)
            for i in range(0, len(domEvents)):
                domEventKeys = domEvents[i].keys()
                print("\tDOM Event %d." % domEventCount)
                for domEventKey in domEventKeys:
                    if domEventKey == "objectShape":
                        print("\t\tobjectShape:")
                        objKeys = domEvents[i][domEventKey].keys()
                        for objKey in objKeys:
                            print(
                                "\t\t\t%s: %s"
                                % (objKey, domEvents[i][domEventKey][objKey])
                            )
                        continue
                    print("\t\t%s: %s" % (domEventKey, domEvents[i][domEventKey]))
                domEventCount = domEventCount + 1


# networkEvents:
# Input: None
# Output: Prints all Network Event evidence objects in the DB.
def networkEvents():
    evidence = data["evidence"]
    keys = evidence.keys()
    for key in keys:
        if key == "Network_events":
            networkEvents = evidence[key]
            networkEventCount = 1
            print("\n%s:" % key)
            for i in range(0, len(networkEvents)):
                networkEventKeys = networkEvents[i].keys()
                print("\tNetwork Event %d." % networkEventCount)
                for networkEventKey in networkEventKeys:
                    if networkEventKey == "objectShape":
                        print("\t\tobjectShape:")
                        objKeys = networkEvents[i][networkEventKey].keys()
                        for objKey in objKeys:
                            print(
                                "\t\t\t%s: %s"
                                % (objKey, networkEvents[i][networkEventKey][objKey])
                            )
                        continue
                    print(
                        "\t\t%s: %s"
                        % (networkEventKey, networkEvents[i][networkEventKey])
                    )
                networkEventCount = networkEventCount + 1


# ================================================================================
# ============================= HYPOTHESES PARSING ===============================
# ================================================================================

# insertHypothesis:
# input: JSON hypothesis object in input.txt
# output: None (inserts hypothesis object into DB)
def insertHypothesis():
    hypotheses = data["hypotheses"]
    #Read in hypothesis from input.txt as JSON object
    try:
        with open('input.txt', 'r') as file:
            hypothesis = json.load(file)
    except json.decoder.JSONDecodeError as e:
        print("Error parsing in hypothesis from input.txt, please make sure your hypothesis is formatted as a JSON object.")
        return
    #Use regex to (roughly) validate hypothesis
    if not 'id' or not 'hypothesis' or not 'description' or not 'tags' in hypothesis:
        print("Invalid hypothesis format, please make sure that your hypothesis is formatted properly.")
    else:
        #Push hypothesis to hypothesis array, write data to TEMPORARY hypothesis.json file for testing purposes
        hypotheses.append(hypothesis)
        data["hypotheses"] = hypotheses
        data_string = json.dumps(data, indent=4)
        with open('hypotheses.json', 'w') as file:
            file.write(data_string)


# allHypotheses:
# Input: None
# Output: Prints all hypotheses objects in the JSON.
def allHypotheses():
    hypotheses = data["hypotheses"]
    for i in range(0, len(hypotheses)):
        print(
            "--------------------------------------------------------------------------------\n"
        )
        print("%s:\n" % hypotheses[i]["id"].replace("_", " "))
        keys = hypotheses[i].keys()
        for key in keys:
            section = hypotheses[i][key]
            if key == "tags":
                print("Tags:")
                tagCount = 1
                for tag in section:
                    print("\t%d." % tagCount, tag)
                    tagCount = tagCount + 1
                continue
            if key == "evidence":
                print("Related Evidence:")
                count = 1
                for evidence in section:
                    print("\tEvidence %d." % count)
                    evidenceKeys = evidence.keys()
                    for evidenceKey in evidenceKeys:
                        if evidenceKey == "HowToFix":
                            print("\t\t%s:" % evidenceKey)
                            steps = evidence[evidenceKey]["steps"]
                            print("\t\tSteps:")
                            stepCount = 1
                            for j in range(0, len(steps)):
                                stepKeys = steps[j].keys()
                                print("\t\t\tStep %d." % stepCount)
                                for stepKey in stepKeys:
                                    print(
                                        "\t\t\t\t%s: %s" % (stepKey, steps[j][stepKey])
                                    )
                                stepCount = stepCount + 1
                            continue
                        print("\t\t%s:" % evidenceKey, evidence[evidenceKey])
                    count = count + 1
                continue
            print("%s:" % key, section)


# exampleHypothesis:
# Input: String fileName
# Output: Prints the first hypothesis in the DB.
def exampleHypothesis():
    hypothesis = data["hypotheses"][0]
    print("%s:\n" % hypothesis["id"].replace("_", " "))
    keys = hypothesis.keys()
    for key in keys:
        section = hypothesis[key]
        if key == "tags":
            print("Tags:")
            tagCount = 1
            for tag in section:
                print("\t%d." % tagCount, tag)
                tagCount = tagCount + 1
            continue
        if key == "evidence":
            print("Related Evidence:")
            count = 1
            for evidence in section:
                print("\tEvidence %d." % count)
                evidenceKeys = evidence.keys()
                for evidenceKey in evidenceKeys:
                    if evidenceKey == "HowToFix":
                        print("\t\t%s:" % evidenceKey)
                        steps = evidence[evidenceKey]["steps"]
                        print("\t\tSteps:")
                        stepCount = 1
                        for j in range(0, len(steps)):
                            stepKeys = steps[j].keys()
                            print("\t\t\tStep %d." % stepCount)
                            for stepKey in stepKeys:
                                print("\t\t\t\t%s: %s" % (stepKey, steps[j][stepKey]))
                            stepCount = stepCount + 1
                        continue
                    print("\t\t%s:" % evidenceKey, evidence[evidenceKey])
                count = count + 1
            continue
        print("%s:" % key, section)


# getHypothesisById:
# Input: Integer id
# Output: Prints the hypothesis at id
def getHypothesisById(id):
    found = False
    hypotheses = data["hypotheses"]
    for i in range(0, len(hypotheses)):
        hypothesisId = hypotheses[i]["id"].replace("_", " ").split()
        for token in hypothesisId:
            if token.isnumeric():
                if token == id:
                    found = True
                    hypothesis = data["hypotheses"][i]
                    print("%s:\n" % hypothesis["id"].replace("_", " "))
                    keys = hypothesis.keys()
                    for key in keys:
                        section = hypothesis[key]
                        if key == "tags":
                            print("Tags:")
                            tagCount = 1
                            for tag in section:
                                print("\t%d." % tagCount, tag)
                                tagCount = tagCount + 1
                            continue
                        if key == "evidence":
                            print("Related Evidence:")
                            count = 1
                            for evidence in section:
                                print("\tEvidence %d." % count)
                                evidenceKeys = evidence.keys()
                                for evidenceKey in evidenceKeys:
                                    if evidenceKey == "HowToFix":
                                        print("\t\t%s:" % evidenceKey)
                                        steps = evidence[evidenceKey]["steps"]
                                        print("\t\tSteps:")
                                        stepCount = 1
                                        for j in range(0, len(steps)):
                                            stepKeys = steps[j].keys()
                                            print("\t\t\tStep %d." % stepCount)
                                            for stepKey in stepKeys:
                                                print(
                                                    "\t\t\t\t%s: %s"
                                                    % (stepKey, steps[j][stepKey])
                                                )
                                            stepCount = stepCount + 1
                                        continue
                                    print(
                                        "\t\t%s:" % evidenceKey, evidence[evidenceKey]
                                    )
                                count = count + 1
                            continue
                        print("%s:" % key, section)
    if found == False:
        print("Sorry, the hypothesis id you entered is not in the database yet.")


# Close the file
file.close()

# This allows for calling a specific funtion from the command line.
# Usage: python3 ParseHypotheses.py functionName
if __name__ == "__main__":
    if len(sys.argv) == 2:
        globals()[sys.argv[1]]()
    if len(sys.argv) == 3:
        globals()[sys.argv[1]](sys.argv[2])
