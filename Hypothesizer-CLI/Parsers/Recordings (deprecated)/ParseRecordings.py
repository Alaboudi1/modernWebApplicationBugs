import json
import sys


# exampleEntry:
# Input: String fileName
# Output: Prints an example entry in the JSON.
def exampleEntry(fileName):
    # Open Hypothesizer recording file
    file = open(fileName)
    # Load JSON object as a dict
    data = json.load(file)

    entry = data[0]
    keys = entry.keys()
    for key in keys:
        if key == "stack":
            for i in entry[key]:
                print("\n", i)
        else:
            print("\n", key, ":", entry[key])

    # Close the file
    file.close()


# entireDataset:
# Input: String fileName
# Output: Prints all data in the JSON.
def entireDataset(fileName):
    # Open Hypothesizer recording file
    file = open(fileName)
    # Load JSON object as a dict
    data = json.load(file)

    for i in range(0, len(data)):
        print("\nSection:", i + 1)
        section = data[i]
        keys = section.keys()
        for key in keys:
            if key == "stack":
                for j in section[key]:
                    print("\n", j)
            else:
                print("\n", key, ":", section[key])

    # Close the file
    file.close()


# getTypeValues:
# Input: String fileName
# Output: Prints all type values from the JSON entries:
def getTypeValues(fileName):
    # Open Hypothesizer recording file
    file = open(fileName)
    # Load JSON object as a dict
    data = json.load(file)

    typeValues = set(())
    for i in range(0, len(data)):
        section = data[i]
        keys = section.keys()
        for key in keys:
            if key == "type":
                typeValues.add(section[key])
    print(typeValues)

    # Close the file
    file.close()


# These are the following type values I've seen so far (From modernWebApplicationBugs):
# {'codeCoverage', 'responseReceived', 'click', 'mouseout', 'keydown', 'childList', 'attributes', 'requestWillBeSent', 'mouseover'}


# countOccurrences:
# Input: String fileName
# Output: Prints all type values from the JSON entries:
def countOccurrences(fileName):
    # Open Hypothesizer recording file
    file = open(fileName)
    # Load JSON object as a dict
    data = json.load(file)

    numCodeCov = 0
    numResRec = 0
    numClick = 0
    numMouseOut = 0
    numKeyDown = 0
    numChildList = 0
    numAttr = 0
    numReqWillBeSent = 0
    numMouseOver = 0

    for i in range(0, len(data)):
        section = data[i]
        keys = section.keys()
        for key in keys:
            if key == "type":
                if section["type"] == "codeCoverage":
                    numCodeCov += 1
                elif section["type"] == "responseReceived":
                    numResRec += 1
                elif section["type"] == "click":
                    numClick += 1
                elif section["type"] == "mouseout":
                    numMouseOut += 1
                elif section["type"] == "keydown":
                    numKeyDown += 1
                elif section["type"] == "childList":
                    numChildList += 1
                elif section["type"] == "attributes":
                    numAttr += 1
                elif section["type"] == "requestWillBeSent":
                    numReqWillBeSent += 1
                elif section["type"] == "mouseover":
                    numMouseOver += 1

    print("numCodeCov:", numCodeCov)
    print("numResRec:", numResRec)
    print("numClick:", numClick)
    print("numMouseOut:", numMouseOut)
    print("numKeyDown:", numKeyDown)
    print("numChildList:", numChildList)
    print("numAttr:", numAttr)
    print("numReqWillBeSent:", numReqWillBeSent)
    print("numMouseOver:", numMouseOver)

    # Close the file
    file.close()


# Occurrences of each type (from run 1):
#     Code Coverage: 3930
#     Click: 2
#     Attributes: 9
#     Child List: 2
#     Key Down: 8
#     Mouse Out: 4
#     Mouse Over: 4
#     Request Will Be Sent: 1
#     Request Sent: 0


# withoutCodeCoverage:
# Input: String fileName
# Output: Prints all objects that don't have type "codeCoverage"
def withoutCodeCoverage(fileName):
    # Open the file
    file = open(fileName)
    # Convert to dict
    data = json.load(file)

    for i in range(0, len(data)):
        section = data[i]
        keys = section.keys()
        for key in keys:
            if key == "type":
                # Ignore all 3000+ Code Coverage Sections
                if section[key] == "codeCoverage":
                    break
                else:
                    print("\n", section)

    # Close the file
    file.close()


# firstCodeCoverage:
# Input: String fileName
# Output: Prints the first Code Coverage object
def firstCodeCoverage(fileName):
    # Open the file
    file = open(fileName)
    # Convert to dict
    data = json.load(file)

    object = {}

    # Get the first occurrence of a "Code Coverage" object:
    for i in range(0, len(data)):
        section = data[i]
        keys = section.keys()
        for key in keys:
            if key == "type":
                if section["type"] == "codeCoverage":
                    object = section
                    break
    for key in keys:
        if key == "stack":
            for j in section[key]:
                print("\n", j)
        else:
            print("\n", key, ":", section[key])

    # Close the file
    file.close()


# This allows for calling a specific funtion from the command line.
# Usage: python3 ParseRecordings.py functionName "fileName.json"
if __name__ == "__main__":
    recordingPath = "./recordings/" + sys.argv[2]
    globals()[sys.argv[1]](recordingPath)

    # If your recording is not in the recordings directory, uncomment the following line.
    # globals()[sys.argv[1]](sys.argv[2])
